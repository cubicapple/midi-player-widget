from ._version import version_info, __version__

from .example import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'midi-player-widget',
        'require': 'midi-player-widget/extension'
    }]
