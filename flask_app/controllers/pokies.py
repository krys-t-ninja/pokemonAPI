from flask_app import app
from flask import render_template, redirect, request, jsonify

@app.route('/')
def home():
    return render_template('poke.html')

@app.route('/poke_order', methods=['POST'])
def poke_order():
    print("##################")
    print("Purchased some pokemons!!!")
    return redirect('/')
