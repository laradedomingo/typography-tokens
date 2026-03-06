import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Heading, Body, Metric, Code } from './components/Typography'
import typographyTokens from '../tokens/typography.json'
import './App.css'

type Section = 'headings' | 'body' | 'metrics' | 'code' | 'tokens'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('headings')

  const headingSizes = [
    { size: 'xxlarge', token: 'font.heading.xxlarge', fontSize: '32px', lineHeight: '36px', usage: 'Page titles, hero headings' },
    { size: 'xlarge', token: 'font.heading.xlarge', fontSize: '28px', lineHeight: '32px', usage: 'Major section headings' },
    { size: 'large', token: 'font.heading.large', fontSize: '24px', lineHeight: '28px', usage: 'Section headings' },
    { size: 'medium', token: 'font.heading.medium', fontSize: '20px', lineHeight: '24px', usage: 'Subsection headings' },
    { size: 'small', token: 'font.heading.small', fontSize: '16px', lineHeight: '20px', usage: 'Card titles' },
    { size: 'xsmall', token: 'font.heading.xsmall', fontSize: '14px', lineHeight: '20px', usage: 'Table headers' },
    { size: 'xxsmall', token: 'font.heading.xxsmall', fontSize: '12px', lineHeight: '16px', usage: 'Compact headers' },
  ]

  const bodySizes = [
    { size: 'large', weight: 'regular', token: 'font.body.large', fontSize: '16px', lineHeight: '24px' },
    { size: 'large', weight: 'medium', token: 'font.body.large', fontSize: '16px', lineHeight: '24px' },
    { size: 'large', weight: 'bold', token: 'font.body.large', fontSize: '16px', lineHeight: '24px' },
    { size: 'medium', weight: 'regular', token: 'font.body.medium', fontSize: '14px', lineHeight: '20px' },
    { size: 'medium', weight: 'medium', token: 'font.body.medium', fontSize: '14px', lineHeight: '20px' },
    { size: 'medium', weight: 'bold', token: 'font.body.medium', fontSize: '14px', lineHeight: '20px' },
    { size: 'small', weight: 'regular', token: 'font.body.small', fontSize: '12px', lineHeight: '16px' },
    { size: 'small', weight: 'medium', token: 'font.body.small', fontSize: '12px', lineHeight: '16px' },
    { size: 'small', weight: 'bold', token: 'font.body.small', fontSize: '12px', lineHeight: '16px' },
  ]

  const metricSizes = [
    { size: 'large', token: 'font.metric.large', fontSize: '28px', lineHeight: '32px', usage: 'Large statistics, KPIs' },
    { size: 'medium', token: 'font.metric.medium', fontSize: '24px', lineHeight: '28px', usage: 'Medium metrics' },
    { size: 'small', token: 'font.metric.small', fontSize: '16px', lineHeight: '20px', usage: 'Compact metrics' },
  ]

  const previewTemplate = (rowData: any) => {
    if (rowData.weight) {
      return <Body size={rowData.size} weight={rowData.weight}>The quick brown fox jumps over the lazy dog</Body>
    }
    return <Heading size={rowData.size}>The quick brown fox jumps over the lazy dog</Heading>
  }

  const metricPreviewTemplate = (rowData: any) => {
    return <Metric size={rowData.size}>60% complete</Metric>
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Heading size="xxlarge" as="h1">Typography</Heading>
          <Body size="large">Design tokens and components for typography</Body>
        </div>
      </header>

      <main className="container main-content">
        <div className="sidebar-layout">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <button 
                className={`sidebar-nav-item ${activeSection === 'headings' ? 'active' : ''}`}
                onClick={() => setActiveSection('headings')}
              >
                Headings
              </button>
              <button 
                className={`sidebar-nav-item ${activeSection === 'body' ? 'active' : ''}`}
                onClick={() => setActiveSection('body')}
              >
                Body text
              </button>
              <button 
                className={`sidebar-nav-item ${activeSection === 'metrics' ? 'active' : ''}`}
                onClick={() => setActiveSection('metrics')}
              >
                Metrics
              </button>
              <button 
                className={`sidebar-nav-item ${activeSection === 'code' ? 'active' : ''}`}
                onClick={() => setActiveSection('code')}
              >
                Code
              </button>
              <button 
                className={`sidebar-nav-item ${activeSection === 'tokens' ? 'active' : ''}`}
                onClick={() => setActiveSection('tokens')}
              >
                Design tokens
              </button>
            </nav>
          </aside>

          <div className="content">
            {activeSection === 'headings' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Heading styles</h2>
                  <p className="section-description">
                    Headings use Atlassian Sans Bold and are designed for titles and section headers.
                  </p>
                  
                  <DataTable value={headingSizes} stripedRows>
                    <Column field="size" header="Size" style={{ width: '10%' }} />
                    <Column 
                      field="token" 
                      header="Token" 
                      style={{ width: '20%' }}
                      body={(rowData) => <span className="token-badge">{rowData.token}</span>}
                    />
                    <Column field="fontSize" header="Font size" style={{ width: '10%' }} />
                    <Column field="lineHeight" header="Line height" style={{ width: '10%' }} />
                    <Column header="Preview" body={previewTemplate} style={{ width: '30%' }} />
                    <Column field="usage" header="Usage" style={{ width: '20%' }} />
                  </DataTable>
                </section>

                <section className="content-section">
                  <h3 className="example-title">Usage</h3>
                  <div className="code-example">
                    <Code>{`import { Heading } from './components/Typography';

<Heading size="xxlarge" as="h1">Page Title</Heading>
<Heading size="large" as="h2">Section Heading</Heading>
<Heading size="small" as="h3">Subsection</Heading>`}</Code>
                  </div>
                </section>
              </>
            )}

            {activeSection === 'body' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Body text styles</h2>
                  <p className="section-description">
                    Body text uses Atlassian Sans and comes in three sizes with three weight variants each.
                  </p>
                  
                  <DataTable value={bodySizes} stripedRows>
                    <Column field="size" header="Size" style={{ width: '12%' }} />
                    <Column field="weight" header="Weight" style={{ width: '12%' }} />
                    <Column 
                      field="token" 
                      header="Token" 
                      style={{ width: '18%' }}
                      body={(rowData) => <span className="token-badge">{rowData.token}</span>}
                    />
                    <Column field="fontSize" header="Font size" style={{ width: '10%' }} />
                    <Column field="lineHeight" header="Line height" style={{ width: '10%' }} />
                    <Column header="Preview" body={previewTemplate} style={{ width: '38%' }} />
                  </DataTable>
                </section>

                <section className="content-section">
                  <h3 className="example-title">Usage</h3>
                  <div className="code-example">
                    <Code>{`import { Body } from './components/Typography';

<Body size="large">Default paragraph text</Body>
<Body size="medium" weight="medium">Medium weight text</Body>
<Body size="small" weight="bold">Small bold text</Body>`}</Code>
                  </div>
                </section>
              </>
            )}

            {activeSection === 'metrics' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Metric styles</h2>
                  <p className="section-description">
                    Metric styles are designed for displaying numbers, statistics, and data.
                  </p>
                  
                  <DataTable value={metricSizes} stripedRows>
                    <Column field="size" header="Size" style={{ width: '12%' }} />
                    <Column 
                      field="token" 
                      header="Token" 
                      style={{ width: '18%' }}
                      body={(rowData) => <span className="token-badge">{rowData.token}</span>}
                    />
                    <Column field="fontSize" header="Font size" style={{ width: '10%' }} />
                    <Column field="lineHeight" header="Line height" style={{ width: '10%' }} />
                    <Column header="Preview" body={metricPreviewTemplate} style={{ width: '30%' }} />
                    <Column field="usage" header="Usage" style={{ width: '20%' }} />
                  </DataTable>
                </section>

                <section className="content-section">
                  <h3 className="example-title">Usage</h3>
                  <div className="code-example">
                    <Code>{`import { Metric } from './components/Typography';

<Metric size="large">60% complete</Metric>
<Metric size="medium">5 in review</Metric>
<Metric size="small">12 tasks</Metric>`}</Code>
                  </div>
                </section>
              </>
            )}

            {activeSection === 'code' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Code style</h2>
                  <p className="section-description">
                    Code style uses Atlassian Mono for displaying code snippets and technical content.
                  </p>
                  
                  <div className="example-container">
                    <h3 className="example-title">Example</h3>
                    <div className="code-preview">
                      <Code>{`for (int i = 0; i < 26; i++) {
  printf("Quick brown fox jumps over lazy dog %d times.\\n", i);
  printf("1234567890");
}`}</Code>
                    </div>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="example-title">Usage</h3>
                  <div className="code-example">
                    <Code>{`import { Code } from './components/Typography';

// Block code
<Code>
{\`for (int i = 0; i < 26; i++) {
  printf("Hello World");
}\`}
</Code>

// Inline code
<Code inline>const value = 42;</Code>`}</Code>
                  </div>
                </section>
              </>
            )}

            {activeSection === 'tokens' && (
              <section className="content-section">
                <h2 className="section-title">Design tokens</h2>
                <p className="section-description">
                  All typography values are available as design tokens in JSON and CSS formats.
                </p>
                
                <div className="code-example">
                  <Code>{JSON.stringify(typographyTokens, null, 2)}</Code>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
