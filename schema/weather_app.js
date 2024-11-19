export let forecast = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
      "cod": {
        "type": "string"
      },
      "message": {
        "type": "number"
      },
      "cnt": {
        "type": "number"
      },
      "list": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dt": {
              "type": "number"
            },
            "main": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "number"
                },
                "feels_like": {
                  "type": "number"
                },
                "temp_min": {
                  "type": "number"
                },
                "temp_max": {
                  "type": "number"
                },
                "pressure": {
                  "type": "number"
                },
                "sea_level": {
                  "type": "number"
                },
                "grnd_level": {
                  "type": "number"
                },
                "humidity": {
                  "type": "number"
                },
                "temp_kf": {
                  "type": "number"
                }
              },
              "required": [
                "temp",
                "feels_like",
                "temp_min",
                "temp_max",
                "pressure",
                "sea_level",
                "grnd_level",
                "humidity",
                "temp_kf"
              ]
            },
            "weather": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "number"
                  },
                  "main": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "icon": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "main",
                  "description",
                  "icon"
                ]
              }
            },
            "clouds": {
              "type": "object",
              "properties": {
                "all": {
                  "type": "number"
                }
              },
              "required": [
                "all"
              ]
            },
            "wind": {
              "type": "object",
              "properties": {
                "speed": {
                  "type": "number"
                },
                "deg": {
                  "type": "number"
                },
                "gust": {
                  "type": "number"
                }
              },
              "required": [
                "speed",
                "deg",
                "gust"
              ]
            },
            "visibility": {
              "type": "number"
            },
            "pop": {
              "type": "number"
            },
            "sys": {
              "type": "object",
              "properties": {
                "pod": {
                  "type": "string"
                }
              },
              "required": [
                "pod"
              ]
            },
            "dt_txt": {
              "type": "string"
            },
            "rain": {
              "type": "object",
              "properties": {
                "3h": {
                  "type": "number"
                }
              },
              "required": [
                "3h"
              ]
            }
          },
          "required": [
            "dt",
            "main",
            "weather",
            "clouds",
            "wind",
            "visibility",
            "pop",
            "sys",
            "dt_txt"
          ]
        }
      },
      "city": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "coord": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number"
              },
              "lon": {
                "type": "number"
              }
            },
            "required": [
              "lat",
              "lon"
            ]
          },
          "country": {
            "type": "string"
          },
          "population": {
            "type": "number"
          },
          "timezone": {
            "type": "number"
          },
          "sunrise": {
            "type": "number"
          },
          "sunset": {
            "type": "number"
          }
        },
        "required": [
          "id",
          "name",
          "coord",
          "country",
          "population",
          "timezone",
          "sunrise",
          "sunset"
        ]
      }
    },
    "required": [
      "cod",
      "message",
      "cnt",
      "list",
      "city"
    ]
}

export let currentWeather = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "coord": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      },
      "required": [
        "lon",
        "lat"
      ]
    },
    "weather": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "main": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "main",
          "description",
          "icon"
        ]
      }
    },
    "base": {
      "type": "string"
    },
    "main": {
      "type": "object",
      "properties": {
        "temp": {
          "type": "number"
        },
        "feels_like": {
          "type": "number"
        },
        "temp_min": {
          "type": "number"
        },
        "temp_max": {
          "type": "number"
        },
        "pressure": {
          "type": "number"
        },
        "humidity": {
          "type": "number"
        },
        "sea_level": {
          "type": "number"
        },
        "grnd_level": {
          "type": "number"
        }
      },
      "required": [
        "temp",
        "feels_like",
        "temp_min",
        "temp_max",
        "pressure",
        "humidity",
        "sea_level",
        "grnd_level"
      ]
    },
    "visibility": {
      "type": "number"
    },
    "wind": {
      "type": "object",
      "properties": {
        "speed": {
          "type": "number"
        },
        "deg": {
          "type": "number"
        }
      },
      "required": [
        "speed",
        "deg"
      ]
    },
    "clouds": {
      "type": "object",
      "properties": {
        "all": {
          "type": "number"
        }
      },
      "required": [
        "all"
      ]
    },
    "dt": {
      "type": "number"
    },
    "sys": {
      "type": "object",
      "properties": {
        "type": {
          "type": "number"
        },
        "id": {
          "type": "number"
        },
        "country": {
          "type": "string"
        },
        "sunrise": {
          "type": "number"
        },
        "sunset": {
          "type": "number"
        }
      },
      "required": [
        "type",
        "id",
        "country",
        "sunrise",
        "sunset"
      ]
    },
    "timezone": {
      "type": "number"
    },
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "cod": {
      "type": "number"
    }
  },
  "required": [
    "coord",
    "weather",
    "base",
    "main",
    "visibility",
    "wind",
    "clouds",
    "dt",
    "sys",
    "timezone",
    "id",
    "name",
    "cod"
  ]
}

export let airPollution={
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "coord": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      },
      "required": [
        "lon",
        "lat"
      ]
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "main": {
            "type": "object",
            "properties": {
              "aqi": {
                "type": "number"
              }
            },
            "required": [
              "aqi"
            ]
          },
          "components": {
            "type": "object",
            "properties": {
              "co": {
                "type": "number"
              },
              "no": {
                "type": "number"
              },
              "no2": {
                "type": "number"
              },
              "o3": {
                "type": "number"
              },
              "so2": {
                "type": "number"
              },
              "pm2_5": {
                "type": "number"
              },
              "pm10": {
                "type": "number"
              },
              "nh3": {
                "type": "number"
              }
            },
            "required": [
              "co",
              "no",
              "no2",
              "o3",
              "so2",
              "pm2_5",
              "pm10",
              "nh3"
            ]
          },
          "dt": {
            "type": "number"
          }
        },
        "required": [
          "main",
          "components",
          "dt"
        ]
      }
    }
  },
  "required": [
    "coord",
    "list"
  ]
}

export let reverseGeo = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "local_names": {
        "type": "object",
        "properties": {
          "kn": {
            "type": "string"
          }
        },
        "required": [
          "kn"
        ]
      },
      "lat": {
        "type": "number"
      },
      "lon": {
        "type": "number"
      },
      "country": {
        "type": "string"
      },
      "state": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "local_names",
      "lat",
      "lon",
      "country",
      "state"
    ]
  }
}

export let searchGeo = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "local_names": {
        "type": "object",
        "properties": {
          "be": {
            "type": "string"
          },
          "uz": {
            "type": "string"
          },
          "en": {
            "type": "string"
          },
          "gn": {
            "type": "string"
          },
          "ny": {
            "type": "string"
          },
          "mi": {
            "type": "string"
          },
          "ms": {
            "type": "string"
          },
          "kk": {
            "type": "string"
          },
          "bs": {
            "type": "string"
          },
          "br": {
            "type": "string"
          },
          "rm": {
            "type": "string"
          },
          "ia": {
            "type": "string"
          },
          "wa": {
            "type": "string"
          },
          "kw": {
            "type": "string"
          },
          "uk": {
            "type": "string"
          },
          "ay": {
            "type": "string"
          },
          "si": {
            "type": "string"
          },
          "bo": {
            "type": "string"
          },
          "eu": {
            "type": "string"
          },
          "lb": {
            "type": "string"
          },
          "gv": {
            "type": "string"
          },
          "hy": {
            "type": "string"
          },
          "tw": {
            "type": "string"
          },
          "cy": {
            "type": "string"
          },
          "pa": {
            "type": "string"
          },
          "oc": {
            "type": "string"
          },
          "et": {
            "type": "string"
          },
          "su": {
            "type": "string"
          },
          "fo": {
            "type": "string"
          },
          "sa": {
            "type": "string"
          },
          "ln": {
            "type": "string"
          },
          "bi": {
            "type": "string"
          },
          "na": {
            "type": "string"
          },
          "it": {
            "type": "string"
          },
          "pt": {
            "type": "string"
          },
          "th": {
            "type": "string"
          },
          "ro": {
            "type": "string"
          },
          "se": {
            "type": "string"
          },
          "ce": {
            "type": "string"
          },
          "ff": {
            "type": "string"
          },
          "mk": {
            "type": "string"
          },
          "vi": {
            "type": "string"
          },
          "fi": {
            "type": "string"
          },
          "co": {
            "type": "string"
          },
          "st": {
            "type": "string"
          },
          "fr": {
            "type": "string"
          },
          "sv": {
            "type": "string"
          },
          "fy": {
            "type": "string"
          },
          "yi": {
            "type": "string"
          },
          "om": {
            "type": "string"
          },
          "sl": {
            "type": "string"
          },
          "ta": {
            "type": "string"
          },
          "ar": {
            "type": "string"
          },
          "wo": {
            "type": "string"
          },
          "mr": {
            "type": "string"
          },
          "sw": {
            "type": "string"
          },
          "tt": {
            "type": "string"
          },
          "es": {
            "type": "string"
          },
          "sh": {
            "type": "string"
          },
          "hi": {
            "type": "string"
          },
          "af": {
            "type": "string"
          },
          "da": {
            "type": "string"
          },
          "gd": {
            "type": "string"
          },
          "ba": {
            "type": "string"
          },
          "qu": {
            "type": "string"
          },
          "bh": {
            "type": "string"
          },
          "ps": {
            "type": "string"
          },
          "feature_name": {
            "type": "string"
          },
          "zu": {
            "type": "string"
          },
          "to": {
            "type": "string"
          },
          "mt": {
            "type": "string"
          },
          "os": {
            "type": "string"
          },
          "ascii": {
            "type": "string"
          },
          "ha": {
            "type": "string"
          },
          "nn": {
            "type": "string"
          },
          "lo": {
            "type": "string"
          },
          "sc": {
            "type": "string"
          },
          "cv": {
            "type": "string"
          },
          "sn": {
            "type": "string"
          },
          "fj": {
            "type": "string"
          },
          "zh": {
            "type": "string"
          },
          "sm": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "mg": {
            "type": "string"
          },
          "ht": {
            "type": "string"
          },
          "gl": {
            "type": "string"
          },
          "ka": {
            "type": "string"
          },
          "so": {
            "type": "string"
          },
          "ky": {
            "type": "string"
          },
          "or": {
            "type": "string"
          },
          "li": {
            "type": "string"
          },
          "lt": {
            "type": "string"
          },
          "sd": {
            "type": "string"
          },
          "ie": {
            "type": "string"
          },
          "he": {
            "type": "string"
          },
          "kn": {
            "type": "string"
          },
          "tg": {
            "type": "string"
          },
          "nl": {
            "type": "string"
          },
          "am": {
            "type": "string"
          },
          "jv": {
            "type": "string"
          },
          "sq": {
            "type": "string"
          },
          "io": {
            "type": "string"
          },
          "kl": {
            "type": "string"
          },
          "is": {
            "type": "string"
          },
          "pl": {
            "type": "string"
          },
          "lv": {
            "type": "string"
          },
          "vo": {
            "type": "string"
          },
          "ru": {
            "type": "string"
          },
          "bm": {
            "type": "string"
          },
          "ku": {
            "type": "string"
          },
          "ml": {
            "type": "string"
          },
          "ab": {
            "type": "string"
          },
          "an": {
            "type": "string"
          },
          "cs": {
            "type": "string"
          },
          "ur": {
            "type": "string"
          },
          "el": {
            "type": "string"
          },
          "hu": {
            "type": "string"
          },
          "mn": {
            "type": "string"
          },
          "ig": {
            "type": "string"
          },
          "bn": {
            "type": "string"
          },
          "sr": {
            "type": "string"
          },
          "tk": {
            "type": "string"
          },
          "km": {
            "type": "string"
          },
          "ca": {
            "type": "string"
          },
          "ga": {
            "type": "string"
          },
          "ee": {
            "type": "string"
          },
          "av": {
            "type": "string"
          },
          "nv": {
            "type": "string"
          },
          "my": {
            "type": "string"
          },
          "sk": {
            "type": "string"
          },
          "cu": {
            "type": "string"
          },
          "gu": {
            "type": "string"
          },
          "tl": {
            "type": "string"
          },
          "kv": {
            "type": "string"
          },
          "ko": {
            "type": "string"
          },
          "hr": {
            "type": "string"
          },
          "tr": {
            "type": "string"
          },
          "az": {
            "type": "string"
          },
          "de": {
            "type": "string"
          },
          "no": {
            "type": "string"
          },
          "ug": {
            "type": "string"
          },
          "ne": {
            "type": "string"
          },
          "fa": {
            "type": "string"
          },
          "yo": {
            "type": "string"
          },
          "eo": {
            "type": "string"
          },
          "ja": {
            "type": "string"
          },
          "te": {
            "type": "string"
          },
          "bg": {
            "type": "string"
          },
          "oj": {
            "type": "string"
          },
          "cr": {
            "type": "string"
          },
          "iu": {
            "type": "string"
          }
        },
        "required": [
          "en",
          "fr",
          "he",
          "ru",
          "ko"
        ]
      },
      "lat": {
        "type": "number"
      },
      "lon": {
        "type": "number"
      },
      "country": {
        "type": "string"
      },
      "state": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "lat",
      "lon",
      "country",
      "state"
    ]
  }
}