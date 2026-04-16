services:
  backend:
    build: ./backend
    ports:
      - "6700:6700"

  frontend:
    build: ./frontend
    ports:
      - "80:80"

  mongo:
    image: mongo:6

  redis:
    image: redis:7
