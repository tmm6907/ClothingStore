# Generated by Django 3.2 on 2021-04-22 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='variations',
            field=models.CharField(choices=[('red', 'red'), ('green', 'green'), ('blue', 'blue')], default=None, max_length=24),
        ),
    ]