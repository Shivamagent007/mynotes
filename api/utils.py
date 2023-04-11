from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response

def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many = False)
    return (serializer.data)

def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()

    return serializer.data

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return ('Note was deleted !')

def getNoteList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many = True)
    return Response(serializer.data)

def createNoteList(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many = False)
    return Response(serializer.data)

