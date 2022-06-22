from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    #return HttpResponse("How are you doing")
    return render(request, 'restaurant/index.html')