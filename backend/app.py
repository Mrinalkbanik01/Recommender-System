from flask import Flask , render_template , request ,redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///login.db'
db = SQLAlchemy(app)

class User(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    name= db.Column(db.String(50),nullable=False)
    username= db.Column(db.String(50),nullable=False,unique=True)
    password = db.Column(db.String(50),nullable=False)
    email = db.Column(db.String(50),nullable=False,unique=True)

with app.app_context():
    db.create_all()

@app.route('/')
def hello():
    return render_template('init.html')

@app.route('/signin')
def signin():
    return render_template("SignIn.html")
@app.route('/signup',methods=['GET','POST'])
def signup():
    if request.method=='POST':
         name = request.form['name']
         username = request.form['username']
         email = request.form['email']
         password = request.form['password']
         user = User(name= name , username=username, password=password , email = email)
         db.session.add(user)
         db.session.commit()
         return redirect('/signin')
    return render_template('Signup.html')
        
@app.route('/signin',methods=['GET','POST'])
def hello_world():
    if request.method=='POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.password == password:
            return redirect("/home")
        else:
            return redirect("/error")
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('Home.html')

@app.route('/error')
def error():
    return render_template('Nop.html')

if __name__ == '__main__':
    app.run(port=8000,debug=True)
