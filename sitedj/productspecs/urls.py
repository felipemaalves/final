from django.conf.urls import patterns, include, url
from django.views.generic import DetailView, ListView
from productspecs.models import ProductSpec, Product
from productspecs import views

# uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$',
        ListView.as_view(
                queryset=ProductSpec.objects.order_by('pub_date')[:5],
                context_object_name='latest_productspec_list',
                template_name='productspecs/index.html'
        )

    ),
    (r'^store$', views.store),
    url(r'^product$', views.product),
    url(r'^feature$', views.feature),
    url(r'^product/(?P<pk>\d+)$', views.productEdit),
    url(r'^store/(?P<pk>\d+)$', views.storeEdit),
    url(r'^featvalue$',views.featValue),
    url(r'^feature/(?P<pk>\d+)$', views.featureEdit),
    url(r'^featvalue/(?P<pk>\d+)$',views.featValEdit)
)
