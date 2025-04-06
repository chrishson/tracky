# README

## Prerequisites
- using Rbuy 3.4.2 (can use a ruby version manager like rbenv)
- `gem install rails`
- `brew install tmux`
- `brew install overmind`
    - the server (better than puma)

## Running this Project
```bash
bundle install
rails db:migrate
overmind start -f Procfile.dev
```

### browser address
```
http://localhost:5100/task-lists
```
