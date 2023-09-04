from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardButton, InlineKeyboardMurkup
from aiogram.dispatcher import FSMContext
from aiogram.contrlib.fsm_storage.memory import MemoryStorage

TOKEN = '6037548848:AAEZugrYbuNvvqViP6LwYq5fwb7-9F7lU4A'
storage = MemoryStorage()

bot = Bot(TOKEN)
dp = Dispatcher(bot, storage=storage)

webapp = InlineKeyboardButton(url='https://github.com/kosta65434821/cam/webapp/index.html')
kb = InlineKeyboardMurkup().row(webapp)

def start(msg: types.Message, state: FSMContext) -> None:
	user_id = str(msg.from_user.id)
	await bot.send_message(user_id, 'WebApp', webapp)