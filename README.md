# DRF_Youtube
Movie player like YouTube.

# Required

- Python >= 3.6.0
- Node.js


# Setup
```bash
git clone https://github.com/taserbeat/DRF_Youtube.git
cd DRF_Youtube
```

```bash
# (Optional) Create virtual environment if you want to use it.
python -m venv venv
source venv/bin/activate
```

```bash
pip install -r requirements.txt
cd frontend
npm ci
```

# Usage

```bash
cd PATH/TO/DRF_Youtube
python manage.py runserver

cd frontend
npm start
```

Then you will reach [http://localhost:3000](http://localhost:3000) on browser.  
Login or register and you can enjoy playing videos!
