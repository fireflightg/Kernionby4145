import render from 'django/shortcuts';
import firebase from 'firebase';
import * as datetime from 'datetime';
firebase = new firebase.FirebaseApplication("https://frc-4145-attendence.firebaseio.com", null);
function signIn(request) {
    return render(request, "signIn.html");
}
function signOut(request) {
    return render(request, "signOut.html");
}
function postsign(request) {
    var date, now, student_id, time;
    student_id = request.POST.get("Student_ID");
    now = datetime.datetime.now();
    time = now.strftime("%H:%M");
    date = now.strftime("%Y-%m-%d");
    if ((firebase.get(student_id, null) === null)) {
        return render(request, "invalidID.html");
    } else {
        firebase.put(student_id, date, {"Signed in": time});
        return render(request, "signedIn.html");
    }
}
function postsign_signOut(request) {
    var date, now, student_id, time, url;
    student_id = request.POST.get("Student_ID");
    now = datetime.datetime.now();
    time = now.strftime("%H:%M");
    date = now.strftime("%Y-%m-%d");
    if ((firebase.get(student_id, null) === null)) {
        return render(request, "invalidID.html");
    } else {
        url = ((("/" + student_id) + "/") + date);
        firebase.put(url, "Signed Out", time);
        return render(request, "signedOut.html");
    }
}

//# sourceMappingURL=Attendance.js.map
