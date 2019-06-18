midi-player-widget
===============================

A Jupyter widget for playing midi, including those created via the music21 library.

Installation
------------

To install use pip:

    $ pip install midi_player_widget
    $ jupyter nbextension enable --py --sys-prefix midi_player_widget


For a development installation (requires npm),

    $ git clone https://github.com/cubicapple/midi-player-widget.git
    $ cd midi-player-widget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix midi_player_widget
    $ jupyter nbextension enable --py --sys-prefix midi_player_widget
