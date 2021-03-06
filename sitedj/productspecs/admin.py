from productspecs.models import ProductSpec, Feature, Product, FeatureValue
from django.contrib import admin


class FeatureValueInInline(admin.TabularInline):
    model = FeatureValue
    extra = 3

class ProductInline(admin.TabularInline):
	model = Product
	extra = 1

class FeatureInline(admin.TabularInline):
	model = Feature
	extra = 1

class FPAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Product',	{'fields':['name','productspec']}),
    ]
    inlines = [FeatureValueInInline]
    readonly_fields = ['productspec']

class ProductSpecAdmin(admin.ModelAdmin):
        fieldsets = [
                (None,                  {'fields':['name']}),
                ('Date Information', {'fields':['pub_date'], 'classes': ['collapse']}),
        ]
        inlines = [FeatureInline,ProductInline]
        list_display = ('name', 'pub_date', 'was_published_recently')
        list_filter = ['pub_date']
        search_fields = ['name']
        date_hierarchy = 'pub_date'

admin.site.register(ProductSpec, ProductSpecAdmin)
admin.site.register(Product, FPAdmin)
