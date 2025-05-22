import pygame

from pygame import mixer



class Music:
    """A class to manage the music."""
    
    def __init__(self):
        mixer.init()
        mixer.music.load("soundtrack.mp3")
        mixer.music.set_volume(.2 )
        mixer.music.play(-1)
