import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Snowflake" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ХолодОК</span>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Политика конфиденциальности</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта ХолодОК (далее — Сайт). Используя Сайт, вы соглашаетесь с условиями данной 
              Политики конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Собираемая информация</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              При использовании формы обратной связи мы собираем следующую информацию:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Имя пользователя</li>
              <li>Номер телефона</li>
              <li>IP-адрес и данные о браузере (автоматически)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Мы используем ваши персональные данные для:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Связи с вами по вопросам оказания услуг</li>
              <li>Обработки заявок на обратный звонок</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования о наших услугах и акциях</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы применяем современные технические и организационные меры для защиты ваших персональных данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные передаются по 
              защищенным каналам связи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных 
              законодательством Российской Федерации. Для отправки уведомлений может использоваться сервис 
              Telegram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Ваши права</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Вы имеете право:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Получать информацию о ваших персональных данных</li>
              <li>Требовать исправления неточных данных</li>
              <li>Требовать удаления ваших данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Файлы cookie</h2>
            <p className="text-gray-700 leading-relaxed">
              Сайт может использовать файлы cookie для улучшения пользовательского опыта. Вы можете настроить 
              свой браузер для отклонения всех или некоторых файлов cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Изменения в Политике</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Обновленная версия будет опубликована на этой странице с указанием даты последнего обновления.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Контактная информация</h2>
            <p className="text-gray-700 leading-relaxed">
              По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
            </p>
            <div className="mt-4 space-y-2 text-gray-700">
              <p><strong>Email:</strong> astraclimat@gmail.com</p>
              <p><strong>Телефон:</strong> +7 (937) 134-16-27</p>
              <p><strong>Адрес:</strong> г. Астрахань</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              Дата последнего обновления: 18 января 2026 года
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/">
            <Button size="lg">
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
