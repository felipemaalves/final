# Create your views here.

import json
from django.template import Context, loader, RequestContext
from productspecs import models
from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpRequest
from django.shortcuts import render_to_response, get_object_or_404
from django.core.urlresolvers import reverse
import urls
from productspecs.models import ProductSpec, Product

def store(request):

    latest_productspec_list = ProductSpec.objects.all().order_by('pub_date')
    latest_product_list = Product.objects.all().order_by('pub_date')

    dc_rtn = {
        'success': None,
        'specs': []
    }
        
    dc_rtn['success'] = True

    for productspec in latest_productspec_list:
        dc_spec = {
            'id': productspec.id,
            'name': productspec.name
        }
        dc_rtn['specs'].append(dc_spec)

    return HttpResponse(json.dumps(dc_rtn))

def storeEdit(request, pk):

#    import ipdb
#    ipdb.set_trace()

    prod_spec = get_object_or_404(ProductSpec, pk=pk)

    #data = request.__getattribute__(request.method)
    #data = getattr(request, request.method)

    data = json.loads(request.body)

    prod_spec.name = data.get('name')
    prod_spec.save()
    
    dc_spec = {
        'id': prod_spec.id,
        'name': prod_spec.name
    }

    return HttpResponse(json.dumps(dc_spec))
    ###statusCode204 --- HttpResponse para Delete, dar uma lida para ver o certo

#def product(request):

    
