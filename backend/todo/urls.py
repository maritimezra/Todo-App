from rest_framework.routers import DefaultRouter
from .views import TodoViewSet

todo_router = DefaultRouter()
todo_router.register(r"todo", TodoViewSet, basename="todo")

urlpatterns = [
    # ... other urls here...
] + todo_router.urls
