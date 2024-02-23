from kivymd.app import MDApp
from kivy.lang import Builder
from kivy.core.window import Window

Window.size = (300, 600)

class App(MDApp):
    def build(self):
        self.title = "Crediário"
        self.theme_cls.theme_style = "Light"  
        self.theme_cls.primary_palette = "LightBlue" 
        return Builder.load_file('login.kv')
    
    def login(self):
        if self.root.ids.login.text == "yuri" and self.root.ids.senha.text == '1234':
            self.root.ids.label.text = f"Bem-vindo, {self.root.ids.login.text}!"
        else:
            self.root.ids.label.text = "Usuário não encontrado!"

    # def limpar(self):
    #     self.root.ids.label.text = "Login"
    #     self.root.ids.login.text = ""
    #     self.root.ids.senha.text = ""

if __name__ == "__main__":
    App().run()
