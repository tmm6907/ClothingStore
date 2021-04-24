# Generated by Django 3.2 on 2021-04-22 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_num', models.CharField(max_length=8, unique=True)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('order_price', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
    ]