# Create your views here.

import json
from django.template import Context, loader, RequestContext
from productspecs import models
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.core.urlresolvers import reverse
import urls
from productspecs.models import ProductSpec

jsonStart = "{ \"success\": true, \"specs\":  ["
jsonId = "{\"id\":"
jsonName = ", \"name\": \'"
jsonClose = "\'},"
jsonEnd = "]}"

def store(request):

    latest_productspec_list = ProductSpec.objects.all().order_by('pub_date')[:5]
    storage = jsonStart

    for productspec in latest_productspec_list:
        storage += jsonId + str(productspec.id)
        storage += jsonName + productspec.name
        storage += jsonClose
    
    storage += jsonEnd

    return HttpResponse(storage)

