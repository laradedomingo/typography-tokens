import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Heading, Body, Code } from './components/Typography'
import { Button } from './components/Button'
import typographyTokens from '../tokens/typography.json'
import colorTokens from '../tokens/colors.json'
import buttonTokens from '../tokens/button.json'
import './App.css'

type Section = 'headings' | 'body' | 'buttons' | 'colors' | 'tokens'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('headings')

  const headingSizes = [
    { 
      figmaStyle: 'Heading / XXL',
      size: 'xxlarge', 
      token: 'font.heading.xxlarge', 
      fontSize: '32px', 
      lineHeight: '36px', 
      usage: 'Brand and marketing content' 
    },
    { 
      figmaStyle: 'Heading / XL',
      size: 'xlarge', 
      token: 'font.heading.xlarge', 
      fontSize: '28px', 
      lineHeight: '32px', 
      usage: 'App page titles such as forms' 
    },
    { 
      figmaStyle: 'Heading / L',
      size: 'large', 
      token: 'font.heading.large', 
      fontSize: '24px', 
      lineHeight: '28px', 
      usage: 'Headers in large components' 
    },
    { 
      figmaStyle: 'Heading / M',
      size: 'medium', 
      token: 'font.heading.medium', 
      fontSize: '20px', 
      lineHeight: '24px', 
      usage: 'Headers in large components, such as modal dialogs' 
    },
    { 
      figmaStyle: 'Heading / S',
      size: 'small', 
      token: 'font.heading.small', 
      fontSize: '16px', 
      lineHeight: '20px', 
      usage: 'Headers in small components where space is limited' 
    },
    { 
      figmaStyle: 'Heading / XS',
      size: 'xsmall', 
      token: 'font.heading.xsmall', 
      fontSize: '14px', 
      lineHeight: '20px', 
      usage: 'Headers in components' 
    },
    { 
      figmaStyle: 'Heading / XXS',
      size: 'xxsmall', 
      token: 'font.heading.xxsmall', 
      fontSize: '12px', 
      lineHeight: '16px', 
      usage: 'Headers in fine print or tight spaces. Use sparingly' 
    },
  ]

  const bodySizes = [
    { figmaStyle: 'Body / L / Regular', size: 'large', weight: 'regular', token: 'font.body.large', fontSize: '16px', lineHeight: '24px', usage: 'Long-form content such as blogs. The default size for reading text' },
    { figmaStyle: 'Body / L / Medium', size: 'large', weight: 'medium', token: 'font.body.large', fontSize: '16px', lineHeight: '24px', usage: 'Long-form content with emphasis' },
    { figmaStyle: 'Body / L / Bold', size: 'large', weight: 'bold', token: 'font.body.large', fontSize: '16px', lineHeight: '24px', usage: 'Long-form content with strong emphasis' },
    { figmaStyle: 'Body / M (Default) / Regular', size: 'medium', weight: 'regular', token: 'font.body', fontSize: '14px', lineHeight: '20px', usage: 'Short text, such as descriptions in flags, or labels in buttons' },
    { figmaStyle: 'Body / M (Default) / Medium', size: 'medium', weight: 'medium', token: 'font.body', fontSize: '14px', lineHeight: '20px', usage: 'Default size for text in components' },
    { figmaStyle: 'Body / M (Default) / Bold', size: 'medium', weight: 'bold', token: 'font.body', fontSize: '14px', lineHeight: '20px', usage: 'Default size with strong emphasis' },
    { figmaStyle: 'Body / S / Regular', size: 'small', weight: 'regular', token: 'font.body.small', fontSize: '12px', lineHeight: '16px', usage: 'Secondary level content such as fine print. Use sparingly' },
    { figmaStyle: 'Body / S / Medium', size: 'small', weight: 'medium', token: 'font.body.small', fontSize: '12px', lineHeight: '16px', usage: 'Secondary content with emphasis' },
    { figmaStyle: 'Body / S / Bold', size: 'small', weight: 'bold', token: 'font.body.small', fontSize: '12px', lineHeight: '16px', usage: 'Secondary content with strong emphasis' },
  ]

  const previewTemplate = (rowData: any) => {
    if (rowData.weight) {
      return <Body size={rowData.size} weight={rowData.weight}>The quick brown fox jumps over the lazy dog</Body>
    }
    return <Heading size={rowData.size}>The quick brown fox jumps over the lazy dog</Heading>
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
                className={`sidebar-nav-item ${activeSection === 'buttons' ? 'active' : ''}`}
                onClick={() => setActiveSection('buttons')}
              >
                Buttons
              </button>
              <button 
                className={`sidebar-nav-item ${activeSection === 'colors' ? 'active' : ''}`}
                onClick={() => setActiveSection('colors')}
              >
                Colors
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
                    <Column field="figmaStyle" header="Figma text style" style={{ width: '15%' }} />
                    <Column 
                      field="token" 
                      header="Token" 
                      style={{ width: '18%' }}
                      body={(rowData) => <span className="token-badge">{rowData.token}</span>}
                    />
                    <Column field="fontSize" header="Font size" style={{ width: '10%' }} />
                    <Column field="lineHeight" header="Line height" style={{ width: '10%' }} />
                    <Column header="Preview" body={previewTemplate} style={{ width: '22%' }} />
                    <Column field="usage" header="Suitable for" style={{ width: '25%' }} />
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
                    <Column field="figmaStyle" header="Figma text style" style={{ width: '18%' }} />
                    <Column 
                      field="token" 
                      header="Token" 
                      style={{ width: '15%' }}
                      body={(rowData) => <span className="token-badge">{rowData.token}</span>}
                    />
                    <Column field="fontSize" header="Font size" style={{ width: '10%' }} />
                    <Column field="lineHeight" header="Line height" style={{ width: '10%' }} />
                    <Column header="Preview" body={previewTemplate} style={{ width: '22%' }} />
                    <Column field="usage" header="Suitable for" style={{ width: '25%' }} />
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

            {activeSection === 'buttons' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Button variants</h2>
                  <p className="section-description">
                    Buttons use semantic color tokens to communicate different actions and states.
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Button sizes</h3>
                  <p className="section-description">
                    Three sizes are available to accommodate different layouts and hierarchies.
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
                    <Button variant="primary" size="small">Small</Button>
                    <Button variant="primary" size="medium">Medium</Button>
                    <Button variant="primary" size="large">Large</Button>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Button states</h3>
                  <p className="section-description">
                    Buttons have hover, active, focus, and disabled states.
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
                    <Button variant="primary">Default</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="example-title">Usage</h3>
                  <div className="code-example">
                    <Code>{`import { Button } from './components/Button';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// States
<Button disabled>Disabled</Button>`}</Code>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Design tokens</h3>
                  <p className="section-description">
                    Button styles use semantic color tokens for consistency.
                  </p>
                  
                  <DataTable value={[
                    { variant: 'Primary', background: 'color.text.brand', text: 'color.text.inverse', usage: 'Main call-to-action' },
                    { variant: 'Secondary', background: 'transparent', text: 'color.text', usage: 'Secondary actions' },
                    { variant: 'Danger', background: 'color.text.danger', text: 'color.text.inverse', usage: 'Destructive actions' },
                    { variant: 'Success', background: 'color.text.success', text: 'color.text.inverse', usage: 'Positive actions' },
                    { variant: 'Warning', background: 'color.text.warning', text: 'color.text.warning.inverse', usage: 'Warning actions' },
                    { variant: 'Link', background: 'transparent', text: 'color.text.brand', usage: 'Tertiary actions' },
                  ]} stripedRows>
                    <Column field="variant" header="Variant" style={{ width: '15%' }} />
                    <Column 
                      field="background" 
                      header="Background token" 
                      style={{ width: '25%' }}
                      body={(rowData) => <span className="token-badge">{rowData.background}</span>}
                    />
                    <Column 
                      field="text" 
                      header="Text token" 
                      style={{ width: '25%' }}
                      body={(rowData) => <span className="token-badge">{rowData.text}</span>}
                    />
                    <Column field="usage" header="Usage" style={{ width: '35%' }} />
                  </DataTable>
                </section>
              </>
            )}

            {activeSection === 'colors' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Text colors</h2>
                  <p className="section-description">
                    Text colors are used for all text elements across the design system.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
                    {Object.entries(colorTokens.color.text).map(([key, value]) => {
                      if (typeof value === 'string') {
                        return (
                          <div key={key} style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <div style={{ width: '100%', height: '60px', backgroundColor: value, borderRadius: '4px', marginBottom: '8px', border: '1px solid #e0e0e0' }}></div>
                            <Code inline>color.text.{key}</Code>
                            <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b6e76' }}>{value}</div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Accent colors</h3>
                  <p className="section-description">
                    Accent colors provide semantic meaning and visual hierarchy.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
                    {Object.entries(colorTokens.color.text.accent).map(([colorName, shades]) => (
                      <div key={colorName}>
                        {Object.entries(shades as Record<string, string>).map(([shade, value]) => (
                          <div key={`${colorName}-${shade}`} style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '8px' }}>
                            <div style={{ width: '100%', height: '60px', backgroundColor: value, borderRadius: '4px', marginBottom: '8px', border: '1px solid #e0e0e0' }}></div>
                            <Code inline>color.text.accent.{colorName}.{shade}</Code>
                            <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b6e76' }}>{value}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Other colors</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
                    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <div style={{ width: '100%', height: '60px', backgroundColor: colorTokens.color.background.neutral, borderRadius: '4px', marginBottom: '8px', border: '1px solid #e0e0e0' }}></div>
                      <Code inline>color.background.neutral</Code>
                      <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b6e76' }}>{colorTokens.color.background.neutral}</div>
                    </div>
                    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <div style={{ width: '100%', height: '60px', backgroundColor: colorTokens.color.border.default, borderRadius: '4px', marginBottom: '8px', border: '1px solid #e0e0e0' }}></div>
                      <Code inline>color.border</Code>
                      <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b6e76' }}>{colorTokens.color.border.default}</div>
                    </div>
                    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <div style={{ width: '100%', height: '60px', backgroundColor: colorTokens.color.elevation.surface, borderRadius: '4px', marginBottom: '8px', border: '1px solid #e0e0e0' }}></div>
                      <Code inline>elevation.surface</Code>
                      <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b6e76' }}>{colorTokens.color.elevation.surface}</div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeSection === 'tokens' && (
              <>
                <section className="content-section">
                  <h2 className="section-title">Design tokens</h2>
                  <p className="section-description">
                    All design tokens are available in JSON and CSS formats for easy integration into your projects.
                  </p>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Typography tokens</h3>
                  <p className="section-description">
                    Font families, sizes, line heights, and weights.
                  </p>
                  
                  <div className="code-example">
                    <Code>{JSON.stringify(typographyTokens, null, 2)}</Code>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Color tokens</h3>
                  <p className="section-description">
                    Text colors, accent colors, backgrounds, borders, and elevation.
                  </p>
                  
                  <div className="code-example">
                    <Code>{JSON.stringify(colorTokens, null, 2)}</Code>
                  </div>
                </section>

                <section className="content-section">
                  <h3 className="section-title">Button tokens</h3>
                  <p className="section-description">
                    Button variants, sizes, and states using semantic color tokens.
                  </p>
                  
                  <div className="code-example">
                    <Code>{JSON.stringify(buttonTokens, null, 2)}</Code>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
