from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken


User = get_user_model()


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        user = authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed('Неверный email или пароль')

        if not user.is_active:
            raise AuthenticationFailed('Аккаунт отключен')

        refresh = RefreshToken.for_user(user)

        return {
            'token': str(refresh.access_token),
            'user': {
                'id': user.id,
                'name': user.email,
                'role': user.role
            }
        }