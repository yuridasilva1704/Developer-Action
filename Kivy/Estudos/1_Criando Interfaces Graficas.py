from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label 
from kivy.core.window import Window

class ButtonTeste(App):
    def build (self):
        Window.size = (300,400)
        box = BoxLayout(orientation='vertical')
        button = Button(text='Logar', font_size=30, on_release=self.incrementar)
        self.label = Label(text='-1', font_size=30)
        box.add_widget(self.label)
        box.add_widget(button)

        return box
    
    def incrementar(self,button):
        button.text='Soltei'
        self.label.text = str(int(self.label.text)+1)

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
