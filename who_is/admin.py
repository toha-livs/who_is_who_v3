from django.contrib import admin
from .models import UserInfo, Game

admin.site.register(Game)
admin.site.register(UserInfo)