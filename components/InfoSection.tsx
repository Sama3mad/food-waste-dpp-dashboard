'use client'

import { useState } from 'react'

export default function InfoSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'algorithms' | 'simulation'>('overview')

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-2 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => setActiveTab('algorithms')}
            className={`py-4 px-2 border-b-2 font-medium text-sm ${
              activeTab === 'algorithms'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Ranking Algorithms
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-4 px-2 border-b-2 font-medium text-sm ${
              activeTab === 'simulation'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            How Simulation Works
          </button>
        </nav>
      </div>

      <div className="prose max-w-none">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              This dashboard simulates a food waste marketplace where restaurants can sell surplus food bags 
              to customers. The goal is to minimize food waste while maximizing revenue and ensuring fair 
              exposure for all restaurants.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">Key Assumptions</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Simulation runs for <strong>7 days</strong> with <strong>100 customers per day</strong></li>
                <li>Each customer sees the top <strong>5 restaurants</strong> based on the selected ranking algorithm</li>
                <li>Restaurants have estimated and actual inventory (actual varies by ±20%)</li>
                <li>Customers make decisions based on price, rating, distance, and personal preferences</li>
                <li>Reservations can be cancelled (approximately 10% cancellation rate)</li>
                <li>Unsold bags at the end of each day count as waste</li>
                <li>Restaurant ratings can change dynamically based on order confirmations and cancellations</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-900 mb-2">Metrics Tracked</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Bags Sold:</strong> Total number of food bags successfully sold</li>
                <li><strong>Bags Cancelled:</strong> Reservations that were cancelled</li>
                <li><strong>Bags Unsold (Waste):</strong> Food bags that went unsold and were wasted</li>
                <li><strong>Revenue Generated:</strong> Total revenue from confirmed sales</li>
                <li><strong>Revenue Lost:</strong> Revenue lost due to cancellations</li>
                <li><strong>Conversion Rate:</strong> Percentage of customers who made a purchase</li>
                <li><strong>Gini Coefficient:</strong> Measure of fairness in restaurant exposure (0 = perfect equality, 1 = maximum inequality)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'algorithms' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Ranking Algorithms</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">BASELINE</h4>
                <p className="text-gray-700 mt-1">
                  The simplest approach - ranks restaurants purely by their average rating. This serves as our 
                  baseline for comparison. Higher-rated restaurants always appear first, regardless of other factors.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">SAMA</h4>
                <p className="text-gray-700 mt-1">
                  A sophisticated multi-objective optimization algorithm that balances personalization, waste reduction, 
                  fairness, and revenue. It considers customer segments (budget, premium, regular), inventory urgency, 
                  historical interactions, and category preferences to create highly personalized rankings.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">ANDREW</h4>
                <p className="text-gray-700 mt-1">
                  Focuses on fairness by tracking how often each restaurant is shown to customers. Restaurants with 
                  fewer impressions get a boost, ensuring more equitable exposure across all restaurants in the marketplace.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">AMER</h4>
                <p className="text-gray-700 mt-1">
                  Prioritizes proximity by guaranteeing that the closest available restaurant is always shown. This 
                  algorithm ensures customers see nearby options first, which can improve conversion rates and reduce 
                  travel time.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">ZIAD</h4>
                <p className="text-gray-700 mt-1">
                  Uses a weighted scoring system that balances price, rating, and unsold inventory. It gives equal 
                  weight to affordability, quality, and waste reduction, creating a balanced ranking that appeals to 
                  value-conscious customers.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="font-semibold text-lg text-gray-900">HARMONY</h4>
                <p className="text-gray-700 mt-1">
                  A unified strategy that combines the best aspects of other algorithms. It balances inventory urgency, 
                  fairness (exposure tracking), and rating quality to create a well-rounded ranking system that 
                  performs well across multiple metrics.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simulation' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">How the Simulation Works</h3>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">1. Initialization</h4>
                <p>
                  The simulation starts by loading restaurant data (stores.csv) and customer data (customer.csv). 
                  Each restaurant is initialized with estimated and actual inventory. Actual inventory varies randomly 
                  between 80% and 120% of the estimated value to simulate real-world variability.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">2. Daily Customer Arrivals</h4>
                <p>
                  Each day, 100 customers arrive at random times throughout the day. Each customer has unique 
                  characteristics including location, price sensitivity, preferences, and store valuations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">3. Restaurant Ranking</h4>
                <p>
                  When a customer arrives, the selected ranking algorithm determines which 5 restaurants to display. 
                  The algorithm considers factors like customer preferences, restaurant inventory, ratings, prices, 
                  distance, and fairness metrics.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">4. Customer Decision</h4>
                <p>
                  The customer evaluates the displayed restaurants and either makes a reservation or leaves without 
                  purchasing. The decision is based on a score that combines store valuation, rating, price, and 
                  distance. If no restaurant meets the customer's threshold, they leave.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">5. Reservation Processing</h4>
                <p>
                  When a reservation is made, there's a 10% chance it will be cancelled. Cancelled reservations 
                  result in lost revenue. Confirmed reservations generate revenue and reduce inventory.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">6. End of Day</h4>
                <p>
                  At the end of each day, any unsold bags are counted as waste. Restaurant ratings are updated based 
                  on their performance (confirmations increase ratings, cancellations decrease them). The simulation 
                  then moves to the next day.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">7. Results & Comparison</h4>
                <p>
                  After 7 days, the simulation calculates comprehensive metrics for each algorithm including total 
                  sales, waste, revenue, conversion rates, and fairness (Gini coefficient). These metrics allow us 
                  to compare how different ranking strategies perform.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

