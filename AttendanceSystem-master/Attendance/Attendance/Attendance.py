from django.shortcuts import render
from firebase import firebase
import datetime

firebase = firebase.FirebaseApplication('https://frc-4145-attendence.firebaseio.com', None)

def signIn(request):

    return render(request, "signIn.html")

def signOut(request):

    return render(request, "signOut.html")

def postsign(request):
    student_id = request.POST.get('Student_ID')
    now = datetime.datetime.now()
    time = now.strftime("%H:%M")
    date = now.strftime("%Y-%m-%d")
    if firebase.get(student_id, None) == None:
        return render(request, "invalidID.html")
    else:
        firebase.put(student_id, date, {'Signed in': time})
        return render(request, "signedIn.html")

def postsign_signOut(request):
    student_id = request.POST.get('Student_ID')
    now = datetime.datetime.now()
    time = now.strftime("%H:%M")
    date = now.strftime("%Y-%m-%d")
    if firebase.get(student_id, None) == None:
        return render(request, "invalidID.html")
    else:
        url = '/' + student_id + '/' + date
        firebase.put(url, 'Signed Out', time)
        return render(request, "signedOut.html")


