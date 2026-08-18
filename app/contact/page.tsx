export default function ContactPage() {
  return (
    <>
      <div
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "52px 40px 44px",
        }}
        className="md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-12"
      >
        <div>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "20px",
            }}
          >
            Contact us
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "64px",
              lineHeight: ".92",
              margin: "0 0 18px",
              textTransform: "uppercase",
            }}
          >
            Aaj ka rate
            <br />
            chahiye?
          </h1>
          <p
            style={{
              font: "400 17px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 30px",
              maxWidth: "520px",
              textWrap: "pretty",
            }}
          >
            Questions about stock or today's market rates? Message us on
            WhatsApp — that is where we are fastest. Send the material, grade
            and quantity and you'll have a rate, stock position and delivery
            time back.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--color-accent-700)",
              border: "1px solid var(--color-accent-700)",
              maxWidth: "520px",
            }}
          >
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "8px",
                  }}
                >
                  WhatsApp · fastest
                </div>
                <div
                  style={{ font: "800 30px/1 'Barlow Condensed',sans-serif" }}
                >
                  +92 300 9405230
                </div>
              </div>
              <a
                href="https://wa.me/923009405230"
                style={{
                  background: "#fff",
                  color: "var(--color-accent)",
                  font: "700 13px/1 'Barlow Condensed',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  textDecoration: "none",
                }}
              >
                Message
              </a>
            </div>
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </div>
                <div
                  style={{ font: "800 30px/1 'Barlow Condensed',sans-serif" }}
                >
                  +92 300 9405230
                </div>
              </div>
              <a
                href="tel:+923009405230"
                style={{
                  border: "1px solid var(--color-neutral-600)",
                  color: "#fff",
                  font: "700 13px/1 'Barlow Condensed',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  textDecoration: "none",
                }}
              >
                Call
              </a>
            </div>
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginBottom: "8px",
                }}
              >
                Email
              </div>
              <div style={{ font: "400 16px/1.3 'Barlow',sans-serif" }}>
                sstraders03009405230@gmail.com
              </div>
            </div>
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginBottom: "8px",
                }}
              >
                Warehouse &amp; office
              </div>
              <div style={{ font: "400 16px/1.4 'Barlow',sans-serif" }}>
                Lahore, Pakistan
                <br />
                <span
                  style={{
                    color: "var(--color-neutral-600)",
                    fontSize: "14px",
                  }}
                >
                  Full address to be supplied
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="blueprint"
          style={{
            border: "1px solid var(--color-neutral-600)",
            background: "var(--color-accent)",
            padding: "26px",
            position: "relative",
          }}
        >
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "30px",
              lineHeight: "1",
              margin: "0 0 6px",
              textTransform: "uppercase",
            }}
          >
            Send your enquiry
          </h2>
          <p
            style={{
              font: "400 13.5px/1.5 'Barlow',sans-serif",
              color: "var(--color-neutral-500)",
              margin: "0 0 22px",
            }}
          >
            Prefer email? Fill this and we'll reply with a quotation.
          </p>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <div>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  marginBottom: "7px",
                }}
              >
                Your name
              </div>
              <input
                type="text"
                style={{
                  border: "1px solid var(--color-neutral-600)",
                  height: "44px",
                  width: "100%",
                  background: "transparent",
                  color: "#fff",
                  padding: "0 12px",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-500)",
                    marginBottom: "7px",
                  }}
                >
                  Phone
                </div>
                <input
                  type="tel"
                  style={{
                    border: "1px solid var(--color-neutral-600)",
                    height: "44px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    padding: "0 12px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-500)",
                    marginBottom: "7px",
                  }}
                >
                  Email
                </div>
                <input
                  type="email"
                  style={{
                    border: "1px solid var(--color-neutral-600)",
                    height: "44px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    padding: "0 12px",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  marginBottom: "7px",
                }}
              >
                Material &amp; grade
              </div>
              <input
                type="text"
                placeholder="e.g. Ferro Silicon 75%"
                style={{
                  border: "1px solid var(--color-neutral-600)",
                  height: "44px",
                  width: "100%",
                  background: "transparent",
                  color: "#fff",
                  padding: "0 12px",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-500)",
                    marginBottom: "7px",
                  }}
                >
                  Quantity
                </div>
                <input
                  type="text"
                  placeholder="Tons"
                  style={{
                    border: "1px solid var(--color-neutral-600)",
                    height: "44px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    padding: "0 12px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-500)",
                    marginBottom: "7px",
                  }}
                >
                  Delivery city
                </div>
                <input
                  type="text"
                  placeholder="Lahore"
                  style={{
                    border: "1px solid var(--color-neutral-600)",
                    height: "44px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    padding: "0 12px",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  marginBottom: "7px",
                }}
              >
                Message
              </div>
              <textarea
                style={{
                  border: "1px solid var(--color-neutral-600)",
                  height: "84px",
                  width: "100%",
                  background: "transparent",
                  color: "#fff",
                  padding: "12px",
                  outline: "none",
                  resize: "none",
                }}
              ></textarea>
            </div>
            <button
              type="button"
              style={{
                background: "#fff",
                color: "var(--color-accent)",
                font: "700 14px/1 'Barlow Condensed',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "17px",
                textAlign: "center",
                cursor: "pointer",
                border: "none",
              }}
            >
              Send enquiry
            </button>
          </form>
        </div>
      </div>

      <div
        style={{ background: "var(--color-surface)", padding: 0 }}
        className="md:grid md:grid-cols-2 flex flex-col"
      >
        <div style={{ padding: "36px 40px" }}>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "12px",
            }}
          >
            Our location
          </div>
          <h3
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "32px",
              lineHeight: "1",
              margin: "0 0 12px",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Come and see the stock
          </h3>
          <p
            style={{
              font: "400 14.5px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 18px",
              textWrap: "pretty",
            }}
          >
            Buyers are welcome at the warehouse. Call before you come and we'll
            have the grades you want laid out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <div
              style={{
                font: "400 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--color-neutral-600)",
              }}
            >
              Hours
            </div>
            <div
              style={{
                font: "400 14.5px/1.5 'Barlow',sans-serif",
                color: "var(--color-accent)",
              }}
            >
              Mon – Sat · 09:00 – 19:00
              <br />
              Friday break 13:00 – 14:30
              <br />
              <span
                style={{ color: "var(--color-neutral-600)", fontSize: "13px" }}
              >
                Hours to be confirmed
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid var(--color-accent-300)",
            background:
              "repeating-linear-gradient(45deg, #e9e9ea 0 10px, #f2f2f3 10px 20px)",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            font: "600 11px/1 'Barlow',sans-serif",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--color-neutral-500)",
          }}
        >
          Google map embed
        </div>
      </div>
    </>
  );
}
