
from flask import Flask, redirect, url_for, request, render_template
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin, current_user
import sqlite3
import json
from flask import jsonify


app = Flask(__name__)
@app.route('/main', methods=['GET', 'POST'])
def main1():
    print("main")
    return render_template('index.html')
    #return render_template('index_is_logged_in.html', stores=stores, vendingMachines=vendingMachines, inventory=inventory )

@app.route('/')
def main2():
    print("index")
    return render_template('index.html')



if __name__ == '__main__':
    app.debug = True # REMOVE THIS ONCE IN PRODUCTION
    print("http://34.82.219.228:8080 with database at data/kanji_db.db")
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
