<?php

namespace App\Http\Proxy;

use GuzzleHttp\Client;

class TokenProxy
{
  protected $http;

  public function __construct(Client $http)
  {
    $this->http = $http;
  }

  public function login($email, $password)
  {
    if (auth()->attempt(['email' => $email, 'password' => $password, 'is_active' => 1])) {
      return $this->proxy('password', [
        'username' => $email,
        'password' => $password
      ]);;
    }

    return response()->json([
      'status' => false,
      'message' => 'Credentials not match'
    ], 421);
  }

  public function proxy($grantType, array $data = [])
  {
    $data = array_merge($data, [
      'scope' => '',
      'client_id' => env('PASSPORT_CLIENT_ID'),
      'client_secret' => env('PASSPORT_CLIENT_SECRET'),
      'grant_type' => $grantType
    ]);

    $url = env('APP_URL') . '/oauth/token';
    $response = $this->http->post($url, [
      'form_params' => $data
    ]);

    $token = json_decode((string) $response->getBody(), true);

    return response()->json([
      'token' => $token['access_token'],
      'expires_in' => $token['expires_in']
    ])->cookie('refreshToken', $token['refresh_token'], 86400, null, null, false, true);
  }
}
