from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type: application/json"

# Required
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "vet"
app.config["MYSQL_PORT"] = 3306

# Extra configs, optional:

#app.config["MYSQL_CURSORCLASS"] = "DictCursor"
#app.config["MYSQL_CUSTOM_OPTIONS"] = {"ssl": {"ca": "/path/to/ca-file"}}  # https://mysqlclient.readthedocs.io/user_guide.html#functions-and-attributes

mysql = MySQL(app)

@app.route("/clientes")
@cross_origin()
def mascotas():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT user.*, masc.id as id_mascota, masc.nombre as mascota FROM usuario AS user JOIN mascota AS masc ON user.id = masc.id_usuario;""")
    rv = cur.fetchall()
    return jsonify(rv)

@app.route("/documentos")
@cross_origin()
def documentos():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT * FROM documento;""")
    rv = cur.fetchall()
    return jsonify(rv)

@app.route("/login", methods = ['POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()
        cur.execute("""SELECT * FROM usuario WHERE correo = %s AND contrasena = %s;""", (username, password))
        rv = cur.fetchall()
        return jsonify(rv)

@app.route("/media/<path:path>")
@cross_origin()
def media(path):
    return send_from_directory('media', path)

if __name__ == "__main__":
    app.run(debug=True)