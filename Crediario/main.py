from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.label import Label 
from kivy.core.window import Window

class ButtonTeste(App):
    def build (self):
        return Button(text='Logar')

ButtonTeste().run()

class MainApp(App):
   def build(self):
      Window.size = (300,600)
      label = Label(
          text="E ae, Mundo!",            
            halign = 'center',
            text_color=(0, 0, 0, 1),
            md_bg_color=(1, 1, 1, 1)
        )
      return label

MainApp().run()
