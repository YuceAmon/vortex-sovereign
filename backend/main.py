
from fastapi import FastAPI
app = FastAPI(title="VORTEX")

MONARCH_ID = "MONARCH_ZERO"

@app.get("/")
async def root():
    return {"brand": "VORTEX", "status": "Operational"}

@app.get("/api/identity")
async def get_identity(user_id: str):
    if user_id == MONARCH_ID:
        return {"name": "VORTEX", "role": "MONARCH", "power": "ABSOLUTE"}
    return {"name": "VORTEX", "role": "USER", "power": "LIMITED"}
