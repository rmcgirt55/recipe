# from django.shortcuts import render
# from django.contrib.auth.models import User
# from django.http import HttpResponse

# # import response from django
# from django.http import JsonResponse
# from django.contrib.auth import logout, login
# from .models import Recipe

# # Create your views here.


# # create a view for user signin using basic authentication
# def signin(request):
#     username = request.POST.get("username")
#     password = request.POST.get("password")
#     user = User.objects.get(username=username)
#     # if user is valid return status code 200 and user data
#     if user.check_password(password):
#         login(request, user)
#         return HttpResponse(status=200)
#     # else return status code 401
#     else:
#         return HttpResponse(status=401)


# # create a view for user signup
# def signup(request):
#     username = request.POST.get("username")
#     password = request.POST.get("password")
#     email = request.POST.get("email")
#     # create a user
#     user = User.objects.create_user(username, email, password)
#     user.save()
#     # return status code 200
#     return HttpResponse(status=200)


# # create a view for user signout
# def signout(request):
#     # return status code 200
#     logout(request)
#     return HttpResponse(status=200)


# def get_recipes(request):
#     # get all the recipes from the database
#     recipes = Recipe.objects.all()
#     # create a list to store all the recipes
#     recipe_list = []
#     # iterate through all the recipes and store them in the list
#     for recipe in recipes:
#         recipe_list.append(
#             {
#                 "recipename": recipe.recipename,
#                 "image": recipe.image,
#                 "cuisines": recipe.cuisines,
#                 "difficulty": recipe.difficulty,
#                 "preptime": recipe.preptime,
#                 "cooktime": recipe.cooktime,
#                 "ingredients": recipe.ingredients,
#                 "directions": recipe.directions,
#                 "description": recipe.description,
#             }
#         )
#     # return the list of recipes
#     return JsonResponse(recipe_list, status=200, safe=False)


from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.authtoken.models import Token
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.authentication import TokenAuthentication


@api_view(["POST"])
@permission_classes([AllowAny])
def signin(request):
    username = request.data.get("username")
    password = request.data.get("password")
    print(username, password)
    user = authenticate(request, username=username, password=password)
    print(user)
    if user is not None:
        login(request, user)
        # get user
        token, _ = Token.objects.get_or_create(user=user)

        # convert user to json
        user = {
            "username": user.username,
            "email": user.email,
        }

        return Response({"token": token.key, "user": user}, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(["POST"])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")
    email = request.data.get("email")

    user = User.objects.create_user(username, email, password)
    user.save()

    return Response(status=status.HTTP_200_OK)


@api_view(["POST"])
def signout(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)


@api_view(["GET"])
def get_recipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "OPTIONS"])
@authentication_classes([TokenAuthentication])
@permission_classes([AllowAny])
def get_user_details(request):
    token = request.headers.get("auth-token").split(" ")[0]
    print(token)
    user = Token.objects.get(key=token).user

    user_details = {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        # Add other user details as needed
    }
    return Response(user_details)


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([AllowAny])
def create_recipe(request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors)
