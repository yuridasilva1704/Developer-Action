from kivymd.app import MDApp
from kivy.lang import Builder

class App(MDApp):
    def build(self):
        self.theme_cls.theme_style="Dark"
        self.theme_cls.primary_palette="Orange"
        return Builder.load_file('login.kv')

if __name__ == "__main__":
    App().run()