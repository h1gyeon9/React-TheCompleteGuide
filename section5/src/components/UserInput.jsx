export default function UserInput({onChange, userProperties}) {


    let editableInitialInvestment = <input
        type="number"
        required
        value={userProperties.initialInvestment}
        onChange={(event) => onChange(event, 'initialInvestment')}
    />

    let editableAnnualInvestment = <input
        type="number"
        required
        value={userProperties.annualInvestment}
        onChange={(event) => onChange(event, 'annualInvestment')}
    />

    let editableExpectedReturn = <input
        type="number"
        required
        value={userProperties.expectedReturn}
        onChange={(event) => onChange(event, 'expectedReturn')}
    />

    let editableDuration = <input
        type="number"
        required
        value={userProperties.duration}
        onChange={(event) => onChange(event, 'duration')}
    />

    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    {editableInitialInvestment}
                </p>
                <p>
                    <label>Annual Investment</label>
                    {editableAnnualInvestment}
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    {editableExpectedReturn}
                </p>
                <p>
                    <label>Duration</label>
                    {editableDuration}
                </p>
            </div>
        </section>
    );
}