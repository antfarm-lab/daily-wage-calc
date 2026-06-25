"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hourlyWage, setHourlyWage] = useState("");
  const [workHours, setWorkHours] = useState("");

  const hourlyWageNum = Number(hourlyWage) || 0;
  const workHoursNum = Number(workHours) || 0;

  const dailyWage = hourlyWageNum * workHoursNum;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">
          日給計算ツール
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          時給と1日の労働時間から、日給の目安を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>時給（円）</label>
            <input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：1200"
            />
          </div>

          <div>
            <label>1日の労働時間（時間）</label>
            <input
              type="number"
              value={workHours}
              onChange={(e) => setWorkHours(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：8"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p className="font-bold text-green-600 text-xl">
            日給目安: ¥{dailyWage.toLocaleString()}
          </p>
        </div>
      </div>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
       <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">日給計算の考え方</h2>

        <p className="text-gray-700 leading-relaxed">
          日給は、時給に1日の労働時間をかけることで計算できます。
          アルバイトやパート勤務で、1日働いた場合の収入目安を確認したいときに便利です。
          実際の支給額は休憩時間、残業代、交通費、税金などによって変わる場合があります。
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">このサイトについて</h2>

        <p className="text-gray-700 leading-relaxed">
          ANT FARMでは、日常生活や仕事に役立つ無料Webツールを公開しています。
          この日給計算ツールでは、時給と1日の労働時間から日給の目安を簡単に確認できます。
          インストール不要でスマホからも利用できます。
        </p>
      </section>

      <footer className="mt-10 pt-6 text-sm text-gray-500 text-center">
        <p>© ANT FARM</p>
        <Link href="/privacy-policy" className="underline">
          プライバシーポリシー
        </Link>
      </footer>
    </main>
  );
}