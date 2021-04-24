# Generated by Django 3.2 on 2021-04-22 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_id', models.CharField(max_length=8, unique=True)),
                ('item_title', models.CharField(max_length=48, unique=True)),
                ('item_price', models.DecimalField(decimal_places=2, max_digits=4)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('variations', models.CharField(choices=[], default=None, max_length=24)),
            ],
        ),
    ]
