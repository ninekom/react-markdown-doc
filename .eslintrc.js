module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      'plugin:react/recommended',
      'plugin:flowtype/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
      "flowtype/boolean-style": [
        2,
        "boolean"
      ],
      "flowtype/define-flow-type": 1,
      "flowtype/delimiter-dangle": [
        2,
        "never"
      ],
      "flowtype/generic-spacing": [
        2,
        "never"
      ],
      "flowtype/no-primitive-constructor-types": 2,
      "flowtype/no-types-missing-file-annotation": 2,
      "flowtype/object-type-delimiter": [
        2,
        "comma"
      ],
      "flowtype/require-parameter-type": 2,
      "flowtype/require-valid-file-annotation": 2,
      "flowtype/semi": [
        2,
        "always"
      ],
      "flowtype/space-after-type-colon": [
        2,
        "always"
      ],
      "flowtype/space-before-generic-bracket": [
        2,
        "never"
      ],
      "flowtype/space-before-type-colon": [
        2,
        "never"
      ],
      "flowtype/type-id-match": [
        2,
        "^([A-Z][a-z0-9]+)"
      ],
      "flowtype/union-intersection-spacing": [
        2,
        "always"
      ],
      "flowtype/use-flow-type": 1,
      "flowtype/valid-syntax": 1,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "jsx-quotes": [
            2,
            "prefer-single"
        ],
        "object-curly-spacing" : [
            2,
            "always"
        ]
    },
    "settings": {
      "flowtype": {
        "onlyFilesWithFlowAnnotation": false
      }
    }
};
