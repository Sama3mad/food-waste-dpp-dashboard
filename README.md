# Food Waste Marketplace Simulation Dashboard

A beautiful, interactive web dashboard for analyzing and comparing ranking algorithms in a food waste marketplace simulation.

## Features

- 📊 **Interactive Simulation**: Upload your own customer and restaurant data (CSV files)
- 🔄 **Multiple Algorithms**: Compare 6 different ranking algorithms (BASELINE, SAMA, ANDREW, AMER, ZIAD, HARMONY)
- 📈 **Visual Analytics**: Charts and tables showing key metrics
- 🎯 **Performance Comparison**: See which algorithm performs best across different metrics
- 📱 **Responsive Design**: Works beautifully on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the dashboard directory:
```bash
cd dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Upload Data Files**:
   - Upload `customer.csv` with customer data (CustomerID, longitude, latitude, store valuations)
   - Upload `stores.csv` with restaurant data (store_id, store_name, branch, average_bags_at_9AM, etc.)

2. **Run Simulation**:
   - Click "Run Simulation" to execute all 6 algorithms
   - Wait for the simulation to complete (usually takes a few seconds)

3. **View Results**:
   - Browse results for each algorithm
   - Compare performance metrics across algorithms
   - Analyze charts and tables

## Deployment to Vercel

This dashboard is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your dashboard will be live!

The dashboard uses client-side simulation, so no backend is required.

## Project Structure

```
dashboard/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── InfoSection.tsx     # Project info tabs
│   ├── FileUpload.tsx      # File upload component
│   ├── SimulationResults.tsx  # Results display
│   └── AlgorithmComparison.tsx # Comparison charts
├── lib/                    # Core logic
│   └── simulationEngine.ts  # Simulation engine
├── types/                  # TypeScript types
│   └── simulation.ts       # Type definitions
└── package.json            # Dependencies
```

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Recharts**: Data visualization
- **PapaParse**: CSV parsing

## License

This project is part of the Food Waste Marketplace Simulation analysis.

