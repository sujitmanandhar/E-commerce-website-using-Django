# Generated by Django 3.0.3 on 2020-10-22 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='conplete',
            new_name='complete',
        ),
    ]
