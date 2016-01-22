# json-append

Append-only CLI that append item to JSON.

## Installation

    npm install json-append -g

## Usage

    $ printf 1 | json-append output.json && printf 2 | json-append output.json

`output.json`

```json
[
  "1",
  "2"
]
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT