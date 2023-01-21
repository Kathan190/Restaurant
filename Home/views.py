from django.shortcuts import render, HttpResponse
from django.contrib import messages

# Create your views here.

def index(request):
    #return HttpResponse("How are you doing")
    return render(request, 'restaurant/index.html')

