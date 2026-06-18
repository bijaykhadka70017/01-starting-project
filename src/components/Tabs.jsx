export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
    // Remap to an uppercase identifier so React treats it as a component
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}