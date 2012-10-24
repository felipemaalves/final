from django.conf.urls import patterns, include, url
from django.views.generic import DetailView, ListView
from productspecs.models import ProductSpec

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
#    url(r'^(?P<pk>\d+)/$',
#        DetailView.as_view(
#                model=ProductSpec,
#                template_name='productspecs/detail.html'
#        )
#    ),
#    url(r'^(?P<pk>\d+)/results/$',
#        DetailView.as_view(
#                model=ProductSpec,
#                template_name='productspecs/results.html'
#        ),
#        name='poll_results'
#    ),
#    url(r'^(?P<poll_id>\d+)/vote/$', 'polls.views.vote'
#    ),
)
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
