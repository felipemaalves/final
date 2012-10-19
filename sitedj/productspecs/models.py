from django.db import models
import datetime
from django.utils import timezone

class ProductSpec(models.Model):
        name = models.CharField(max_length=200)
        pub_date = models.DateTimeField('date published')
        def __unicode__(self):
                return self.name
        def was_published_recently(self):
                return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
        was_published_recently.admin_order_field = 'pub_date'
        was_published_recently.boolean = True
        was_published_recently.short_description = 'Published recently?'

class Product(models.Model):
        productspec = models.ForeignKey(ProductSpec)
        name = models.CharField(max_length=50)
        price = models.IntegerField()
        def __unicode__(self):
                return self.name

class Feature(models.Model):
        productspec = models.ForeignKey(ProductSpec)
        name = models.CharField(max_length=50)
        description = models.CharField(max_length=300)
        def __unicode__(self):
                return self.name

class FeatureValue(models.Model):
        product = models.ForeignKey(Product)
        feature = models.ForeignKey(Feature)
        value = models.IntegerField()
        def __unicode__(self):
                return unicode(self.value)

# Create your models here.
