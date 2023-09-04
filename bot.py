from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from aiogram.dispatcher import FSMContext
from aiogram.utils import executor
from aiogram.contrib.fsm_storage.memory import MemoryStorage

TOKEN = '6037548848:AAEZugrYbuNvvqViP6LwYq5fwb7-9F7lU4A'
storage = MemoryStorage()

bot = Bot(token=TOKEN)
dp = Dispatcher(bot, storage=storage)

webapp = InlineKeyboardButton('webapp', type='web_app', web_app=WebAppInfo(url='https://kosta65434821.github.io/cam/'))
kb = InlineKeyboardMarkup().row(webapp)

async def start(msg: types.Message, state: FSMContext) -> None:
	user_id = str(msg.from_user.id)
	await bot.send_message(user_id, 'WebApp', reply_markup=kb)

def register_handlers() -> None:
	dp.register_message_handler(start, commands='start', state='*')

register_handlers()

async def on_startup(_):
	print('bot get started')

executor.start_polling(dp, on_startup=on_startup)