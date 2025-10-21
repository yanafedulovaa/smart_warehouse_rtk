from django.urls import path
from .views import DashboardCurrentView, dashboard_page

urlpatterns = [
    path("", dashboard_page, name="dashboard_page"),
    path("current", DashboardCurrentView.as_view(), name="dashboard_current"),
]