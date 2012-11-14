# Create your views here.

import json
import datetime
from django.template import Context, loader, RequestContext
from productspecs import models
from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpRequest
from django.shortcuts import render_to_response, get_object_or_404
from django.core.urlresolvers import reverse
import urls
from productspecs.models import ProductSpec, Product

def store(request):

    latest_productspec_list = ProductSpec.objects.all().order_by('pub_date')

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

### storeAdd ###

    if request.method == 'POST':
        data = json.loads(request.body)
        pspec = ProductSpec()
        pspec.name = data.get('name')
        pspec.pub_date = datetime.datetime.now()
        pspec.save()

        return HttpResponse(json.dumps(dc_spec))

###############

    return HttpResponse(json.dumps(dc_rtn))


def storeEdit(request, pk):

    prod_spec = get_object_or_404(ProductSpec, pk=pk)
    data = json.loads(request.body)

    #data = request.__getattribute__(request.method)
    #data = getattr(request, request.method)

    if request.method == 'PUT':
        prod_spec.name = data.get('name')
        prod_spec.save()
  
        dc_spec = {
            'id': prod_spec.id,
            'name': prod_spec.name
        }

        return HttpResponse(json.dumps(dc_spec))

    if request.method == 'DELETE':
        prod_spec.delete()
        return HttpResponse('', status=204)

def productEdit(request, pk):
   
    prod = get_object_or_404(Product, pk=pk)
    data = json.loads(request.body)
    
    if request.method == 'PUT':
        if data.get('name') == '':
            prod.name = 'Sem Nome'
        else:
            prod.name = data.get('name')
        if data.get('price') == '':
            prod.price = 0
        else:
            prod.price = data.get('price')
        prod.save()

        dc_prod = {
            'id': prod.id,
            'name': prod.name,
            'price': prod.price
        }

        return HttpResponse(json.dumps(dc_prod))

    if request.method == 'DELETE':
        prod.delete()
        return HttpResponse('', status=204)


def product(request):

#    prod_spec = get_object_or_404(ProductSpec, pk=pk)
#    latest_product_list = Product.objects.all().order_by('name')
    dc_rtn = {
        'success': None,
        'products': []
    }
    if request.method == 'GET':
        filters = json.loads(request.GET['filter'])
        filter = filters[0]
        pk = filter['value']
        try:
            prod_spec = get_object_or_404(ProductSpec, pk=pk)
            prod_id = prod_spec.id
            latest_product_list = Product.objects.select_related().filter(productspec = prod_id)

        except (KeyError, ProductSpec.DoesNotExist):
            dc_rtn['success'] = False
            return HttpResponse(json.dumps(dc_rtn))

        dc_rtn['success'] = True

        for product in latest_product_list:
            dc_prod = {
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'productspec': product.productspec.id
            }
            dc_rtn['products'].append(dc_prod)

### productAdd ###

    if request.method == 'POST':
        #import ipdb
        #ipdb.set_trace()
        data = json.loads(request.body)
        prod = Product()
        prod.productspec_id = data.get('productspec')
        if data.get('name') == '':
            prod.name = 'Sem Nome'
        else:
            prod.name = data.get('name')
        if data.get('price') == '':
            prod.price = 0
        else:
            prod.price = data.get('price')
        prod.save()

        dc_prod = {
            'id': prod.id,
            'name': prod.name,
            'price': prod.price,
            'productspec': prod.productspec.id
        }

        return HttpResponse(json.dumps(dc_prod))

###############

    return HttpResponse(json.dumps(dc_rtn))


