from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/historias')
def historias():
    return render_template('historias.html')


@app.route('/h_guarda_chuva_magico')
def h_guarda_chuva_magico():
    return render_template('h_guarda_chuva_magico.html')


@app.route('/historias/<int:indice>')
def historia(indice):
    return render_template('historia.html', indice=indice)


if __name__ == '__main__':
    app.run(debug=True)
