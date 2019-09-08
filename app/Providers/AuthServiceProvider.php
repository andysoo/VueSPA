<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //注册路由
        Passport::routes();
        //用户登陆后颁发accesstoken 有效期15天，addMinutes(30)分钟
        //Passport::tokensExpireIn(now()->addDays(15));
        Passport::tokensExpireIn(now()->addMinutes(30));

        //accesstoken过期后，通过refreshToken重新获取accesstoken，10天后重新输入密码登陆
        Passport::refreshTokensExpireIn(now()->addDays(10));
    }
}
