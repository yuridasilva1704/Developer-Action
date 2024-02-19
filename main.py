from kivymd.app import MDApp
from kivymd.uix.label import MDLabel 
from kivy.core.window import Window

class MainApp(MDApp):

    def build(self):
        Window.size = (300,600)
        label = MDLabel(
            text="E ae, Mundo!",            
            halign = 'center',
            text_color=(0, 0, 0, 1),
            md_bg_color=(1, 1, 1, 1)
        )
        return label

MainApp().run()